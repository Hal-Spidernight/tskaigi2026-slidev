import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
  return {
    theme: 'base',
    themeVariables: {
      // Global / flowchart
      background: 'transparent',
      primaryColor: '#0E131F',
      primaryTextColor: '#F3EFF5',
      primaryBorderColor: '#44FFD2',
      secondaryColor: '#181d29',
      tertiaryColor: '#404551',
      lineColor: '#F3EFF5',
      textColor: '#F3EFF5',
      mainBkg: '#0E131F',
      nodeBorder: '#44FFD2',
      clusterBkg: 'transparent',
      clusterBorder: '#404551',
      edgeLabelBackground: '#181d29',
      titleColor: '#F3EFF5',

      // xychart
      xyChart: {
        backgroundColor: 'transparent',
        titleColor: '#F3EFF5',
        xAxisLabelColor: '#F3EFF5',
        xAxisTitleColor: '#F3EFF5',
        xAxisTickColor: '#F3EFF5',
        xAxisLineColor: '#F3EFF5',
        yAxisLabelColor: '#F3EFF5',
        yAxisTitleColor: '#F3EFF5',
        yAxisTickColor: '#F3EFF5',
        yAxisLineColor: '#F3EFF5',
        plotColorPalette: '#44FFD2,#FF6B9D',
      },

      // Notes
      noteBkgColor: '#181d29',
      noteTextColor: '#F3EFF5cc',
      noteBorderColor: '#404551',

      // Sequence diagram
      actorBkg: '#0E131F',
      actorBorder: '#44FFD2',
      actorTextColor: '#F3EFF5',
      actorLineColor: '#F3EFF5',
      signalColor: '#F3EFF5',
      signalTextColor: '#F3EFF5',
    },
  }
})
