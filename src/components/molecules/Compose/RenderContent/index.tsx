export function RenderContent(topMessage: any) {
  const renderedContent = topMessage?.blocks?.map((block: any) => {
    let text = block.text
    let styleMarkup = ''

    block.inlineStyleRanges.forEach((styleRange: any) => {
      const style = styleRange?.style
      if (style && style === 'BOLD') {
        styleMarkup += 'font-weight: bold;'
      }
      if (style && style === 'ITALIC') {
        styleMarkup += 'font-style: italic;'
      }
      if (style && style === 'UNDERLINE') {
        styleMarkup += 'text-decoration: underline;'
      }
      if (style && style === 'STRIKETHROUGH') {
        styleMarkup += 'text-decoration: line-through;'
      }
      if (style && /^fontfamily-/i.test(style)) {
        styleMarkup += `font-family: ${style.replace(/^fontfamily-/i, '')};`
      }
      if (style && /^fontsize-/i.test(style)) {
        styleMarkup += `font-size: ${style.replace(/^fontsize-/i, '') + 'px'};`
      }
      if (style && /^color-/i.test(style)) {
        styleMarkup += `color: ${style.replace(/^color-/i, '')};`
      }
    })

    switch (block.data?.['text-align']) {
      case 'center':
        styleMarkup += 'justify-content: center;'
        styleMarkup += 'display: flex;'
        break
      case 'right':
        styleMarkup += 'justify-content: flex-end;'
        styleMarkup += 'display: flex;'
        break
      default:
        styleMarkup += 'justify-content: flex-start;'
        styleMarkup += 'display: flex;'
        break
    }

    if (styleMarkup !== '') {
      text = `<span style="${styleMarkup}">${text}</span>`
    }

    block.entityRanges.forEach((entityRange: any) => {
      const entity = topMessage.entityMap[entityRange.key]
      if (entity.type === 'LINK') {
        text = `<a style="color: blue; text-decoration: underline" href="${entity.data.url}" target="_blank" rel="noopener noreferrer">${text}</a>`
      } else if (entity.type === 'IMAGE') {
        text = `<img src="${entity.data.src}" style="width: 250px; height: 250px; object-fit: contain" alt="${text}" />`
      }
    })

    text = text
      .replace(/%BusinessName%/g, 'Clutch Automotive')
      .replace(/%LocationName%/g, 'Dairy Ashford')
      .replace(/%SenderName%/g, 'Jhony Chu')
      .replace(/%RecipientFirstName%/g, 'Mario')
      .replace(/%RecipientLastName%/g, 'Aguilar')

    return <div key={block.key} dangerouslySetInnerHTML={{ __html: text }} />
  })

  return renderedContent
}
