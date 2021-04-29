class BezelFill {

    static get inputProperties() { 
        return ['--bezel-color', '--bezel-width', '--bezel-radius']; 
    }
  
    static get inputArguments() { 
    }
  
    static get contextOptions() { 
    }
  
    parseValue(value) {
      return value.toString().replace(' ', '').replace(/px|%/g, '').split(' ')
    }
  
    paint(ctx, size, properties) {
          const { 0: color }  = properties.get('--bezel-color')
          const { 0: lineWidth }  = properties.get('--bezel-width')
  
          ctx.lineWidth = lineWidth
          ctx.fillStyle = properties.get('--bezel-color')
  
          const inset = ctx.lineWidth / 2
          const [
              topLeftRadius,
              topRightRadius,
              bottomRightRadius,
              bottomLeftRadius
          ] = this.parseValue(properties.get('--bezel-radius'))
  
          const width = size.width
          const height = size.height
  
          ctx.beginPath()
          ctx.lineTo(topLeftRadius, inset)
          ctx.lineTo((width - topRightRadius), inset)
          ctx.lineTo((width - inset) , topRightRadius)
          ctx.lineTo((width - inset) , (height - bottomRightRadius))
          ctx.lineTo((width - bottomRightRadius) , (height - inset))
          ctx.lineTo((inset + bottomLeftRadius) , (height - inset))
          ctx.lineTo(inset , (height - bottomLeftRadius))
          ctx.lineTo(inset , topLeftRadius)
          ctx.closePath()
          
          ctx.fill()
    }
  }
  
  registerPaint('BezelFill', BezelFill)