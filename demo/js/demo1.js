import QuillEasyTable from 'src/quill-easy-table.js'
// import easy-table styles file
import 'src/assets/quill-easy-table.scss'

Quill.register({
  'modules/easy-table': QuillEasyTable
}, true)

window.onload = () => {
  const quill = new Quill('#editor-wrapper', {
    theme: 'snow',
    modules: {
      table: false,
      'easy-table': {
        operationMenu: {
          items: {
            unmergeCells: {
              text: 'Another unmerge cells name'
            }
          },

          color: {
            colors: ['red', 'green', 'yellow', 'white', 'red', 'green', 'yellow', 'white']
          }
        }
      },
      keyboard: {
        bindings: QuillEasyTable.keyboardBindings
      }
    }
  })

  let tableModule = quill.getModule('easy-table')
  document.body.querySelector('#insert-table')
    .onclick = () => {
      tableModule.insertTable(3, 3)
    }

  document.body.querySelector('#get-table')
    .onclick = () => {
      console.log(tableModule.getTable())
    }

  document.body.querySelector('#get-contents')
    .onclick = () => {
      console.log(quill.getContents())
    }
}
