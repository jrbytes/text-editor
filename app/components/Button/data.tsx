import React from 'react'
import {
  MdTitle,
  MdFormatBold,
  MdFormatItalic,
  MdCode,
  MdList,
  MdFormatUnderlined,
  MdFormatQuote,
} from 'react-icons/md'

export const ButtonData = [
  {
    title: 'title',
    tooltip: 'Título: atalho ALT+T',
    button: <MdTitle />,
  },
  {
    title: 'bold',
    tooltip: 'Negrito: atalho ALT+N',
    button: <MdFormatBold />,
  },
  {
    title: 'italic',
    tooltip: 'Itálico: atalho ALT+I',
    button: <MdFormatItalic />,
  },
  {
    title: 'underline',
    tooltip: 'Sublinhado: atalho ALT+S',
    button: <MdFormatUnderlined />,
  },
  {
    title: 'code',
    tooltip: 'Código: atalho ALT+C',
    button: <MdCode />,
  },
  {
    title: 'list',
    tooltip: 'Lista: atalho ALT+L',
    button: <MdList />,
  },
  {
    title: 'blockquote',
    tooltip: 'Citação: atalho ALT+B',
    button: <MdFormatQuote />,
  },
]
