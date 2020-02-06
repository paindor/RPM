const state = {
    title : '' ,
    labels :[] ,
    lineGraphLabels :[] ,
    barGraphLabels :[] ,
    rowData : [],
    lineGraphRowData : [],
    barGraphRowData : [],
    modelNM : [],
    Domestic : [],
    Export : [],
    GrandTotal : [],
    isLineGraph : true ,
    mainCategoryItem : { domestic : 'Domestic' , export : 'Export'},
    subCategoryItem : {PC: 'PC', RV: 'RV', CV: 'CV', total: 'Total' , Etotal : 'Total (excluding CKD)' , GrandTotal : 'Grand Total'},
    GraphItem : { Line : 'Line' , HorizontalBar : 'HorizontalBar'}
}
const getters = {
    title : state => state.title ,
    labels : state => state.labels ,
    lineGraphLabels : state => state.lineGraphLabels,
    barGraphLabels  : state => state.barGraphLabels ,
    rowData : state => state.rowData ,
    lineGraphRowData : state => state.lineGraphRowData ,
    barGraphRowData  : state => state.barGraphRowData  ,
    modelNM : state => state.modelNM ,
    Domestic : state => state.Domestic ,
    Export : state => state.Export ,
    GrandTotals : state => state.GrandTotals,
    mainCategoryItem : state => state.mainCategoryItem ,
    subCategoryItem : state => state.subCategoryItem,
    isLineGraph : state => state.isLineGraph,
    GraphItem : state => state.GraphItem,

}
const actions = {
    async setChartData({ state , commit } , data ){
        let Ddata = []
        let Edata = []
        let label = new Array()

        let GrandTotalData = []
        let rowData = []
        let mainCategory = ''
        let subCategory = ''
        let regExp = /[.,'"]/gi
        let mainCategoryItem = state.mainCategoryItem
        let subCategoryItem = state.subCategoryItem

        const content = data;
        const lines = content.split("\n");
        let title = lines[0].replace(regExp, "");

            label.push('CG')
            label.push('Model')
            lines[2].split(",\"").splice(3).forEach(item => label.push(item.replace("\"", "")))
            //loop all rows
            for (let count = 5; count < lines.length-1; count++) {

                if (lines[count].indexOf(subCategoryItem.GrandTotal) > -1) {
                    lines[count].split(",\"").splice(2)
                        .forEach(item => GrandTotalData.push(item.replace("\"", "")))

                }else if (lines[count].includes(mainCategoryItem.domestic) || lines[count].includes(mainCategoryItem.export)) {
                    mainCategory = lines[count].replace(regExp, "");

                } else if (!lines[count].includes("\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\"")) {
                    let rowContent = lines[count].split(",\"", -1);
                    let modelName = ''
                    rowData = []
                    if (rowContent[1].indexOf(subCategoryItem.PC) > -1
                        || rowContent[1].indexOf(subCategoryItem.RV) > -1
                        || rowContent[1].indexOf(subCategoryItem.CV) > -1
                        || rowContent[1].indexOf(subCategoryItem.total) > -1
                        || rowContent[1].indexOf(subCategoryItem.GrandTotal) > -1) {

                        subCategory = rowContent[1].replace(regExp, "");
                    }
                    // loop all cell
                    for (let i = 2; i < rowContent.length; i++) {
                        if (i > 2) rowData.push(rowContent[i].replace(/[.,'"]/gi, ""))
                        if (i == 2) modelName = rowContent[i].replace(/[.,'"]/gi, "")
                    }

                    if (mainCategory == mainCategoryItem.domestic) {
                        Ddata.push({
                            mainCategory: mainCategory,
                            subCategory: subCategory,
                            modelName: modelName,
                            monthRevenue: rowData.slice(0,12),
                            Total: rowData[12]
                        })
                    }

                    if (mainCategory == mainCategoryItem.export) {

                        Edata.push({
                            mainCategory: mainCategory,
                            subCategory: subCategory,
                            modelName: modelName,
                            monthRevenue: rowData.slice(0,12),
                            Total: rowData[12]
                        })
                    }
                }
            }
            commit('SETCHARTDATA'
                , {
                    title: title,
                    labels: label,
                    mainCategory: mainCategoryItem.domestic,
                    data: Ddata,
                    GrandTotal : {
                        mainCategory: mainCategoryItem.domestic ,
                        subCategory: subCategoryItem.GrandTotal,
                        modelName: '',
                        monthRevenue: GrandTotalData.slice(1,13),
                        Total: GrandTotalData[13]
                    }
                })

        commit('SETCHARTDATA'
                , {
                    title: title,
                    labels: label,
                    mainCategory: mainCategoryItem.export,
                    data: Edata,
                    GrandTotal : {
                        mainCategory: mainCategoryItem.export ,
                        subCategory: subCategoryItem.GrandTotal,
                        modelName: '',
                        monthRevenue: GrandTotalData.slice(1,13),
                        Total: GrandTotalData[13]
                    }
                })
    },
    async UpdateChartData( { commit } , data ) {
        commit( 'UPDATECHARTDATA' , data )
    },
    async drawingChartByModel( { commit } , data ) {
        commit( 'DRAWINGCHARTBYMODEL' , data )
    },
    async changeGraph ( { commit } , data ) {
        commit( 'CHANGEGRAPH' , data )
    },
    async LineGraphDataSetup ( { commit } , data ) {
        commit ( 'LINEGRAPHDATASETUP' , data )
    }
}
const mutations = {
    SETCHARTDATA ( state , data ) {

        if (data.mainCategory === state.mainCategoryItem.domestic ) {
            state.Domestic = data.data
            state.title = data.title
            state.labels = data.labels
            state.GrandTotal = data.GrandTotal
        }

        if (data.mainCategory === state.mainCategoryItem.export ) state.Export = data.data
    },
    UPDATECHARTDATA ( state , data ) {
        //state.labels.push(label);
        let total = 0;
        state.Domestic[data.index].monthRevenue[data.monthIndex] = data.hasText
        state.Domestic[data.index].monthRevenue.forEach( item => total += Number(item))
        console.log(total)
        state.Domestic[data.index].Total =total
        let subTotalIndex = state.Domestic.filter( item => item.subCategory === state.Domestic[data.index].subCategory).length
        let subTotal = 0
        for (let i = 0; i < subTotalIndex-1 ; i++) {
            subTotal += Number(state.Domestic[i].Jan)
        }
        state.Domestic[subTotalIndex-1].Jan = subTotal
    },
    DRAWINGCHARTBYMODEL ( state , data ) {
        state.lineGraphLabels = Object.keys(data.targetItem).slice(3,14)
        state.lineGraphRowData = Object.values(data.targetItem).slice(3,14)
    },
    CHANGEGRAPH ( state , data ) {
        switch ( data ) {
            case 'Line' : state.isLineGraph = true
                break
            case 'HorizontalBar' : state.isLineGraph = false
                break
        }
    },
    LINEGRAPHDATASETUP ( state , data ) {
        state.lineGraphLabels = data.labels
        state.data = data.data
    }

}
export default {
    name: 'decenter',
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}