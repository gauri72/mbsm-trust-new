import React, { useRef } from 'react';
import { createRoot } from 'react-dom/client';
import HTMLFlipBook from 'react-pageflip';
const Page = React.forwardRef(({ children }, ref) => <div ref={ref} style={{background:'#fff',border:'1px solid #333',padding:24,height:'100%',boxSizing:'border-box'}}>{children}</div>);
function App(){ const book=useRef(null); return <main><button id="next" onClick={()=>book.current?.pageFlip()?.flipNext()}>Next</button><div style={{width:600,height:400}}><HTMLFlipBook width={300} height={400} showCover={true} onFlip={(e)=>document.getElementById('index').textContent=String(e.data)} ref={book}><Page><span>Cover</span></Page><Page><span>Page one</span></Page><Page><span>Page two</span></Page><Page><span>Back</span></Page></HTMLFlipBook></div><output id="index">0</output></main>}
createRoot(document.getElementById('root')).render(<App/>);
