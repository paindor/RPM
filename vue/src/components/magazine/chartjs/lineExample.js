import { Line } from './baseCharts'

export default {
  extends: Line,
  props:['LineGraphDataSetup'],
  mounted() {
      this.renderChart({
        labels:  ['January' , 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ] ,
        datasets: [
          {
            label:  'CSV 파일을 올려주세요 ',
            borderColor: '#005276',
            data:  [10,10,10,10,10,10,10,10,10,10,10,10],
            borderCapStyle: 'butt',
            lineTension: 0.2,
            fill: false
          }
        ]
      }, {responsive: true, maintainAspectRatio: false})
    }
}