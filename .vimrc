set tabstop=4
set shiftwidth=4

autocmd bufenter * if (winnr("$") == 1 && exists("b:NERDTree") && b:NERDTree.isTabTree()) | q | endif

let g:NERDTreeDirArrowExpandable = '▸'
let g:NERDTreeDirArrowCollapsible = '▾'

syntax on
colorscheme sublimemonokai

nmap <F2> :NERDTreeToggle<CR>
