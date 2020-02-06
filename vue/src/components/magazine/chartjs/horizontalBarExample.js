import { HorizontalBar } from './baseCharts'

export default {
  extends: HorizontalBar,
  props:['BarGraphDataSetup'],
  mounted(){
      this.renderChart({
        labels: this.BarGraphDataSetup.labels,
        datasets: [
          {
            label: this.BarGraphDataSetup.title,
            data: this.BarGraphDataSetup.barGraphRowData,
            backgroundColor: ['#ccd8ff', '#b9d0d6', '#b9d0d6', '#5d7381', '#ccd8ff', '#b9d0d6', '#b9d0d6', '#5d7381', '#ccd8ff', '#b9d0d6', '#b9d0d6', '#5d7381'],
            hoverBorderColor: 'red',
            offset: true
          }
        ]
      }, {responsive: true, maintainAspectRatio: false})
    }
}