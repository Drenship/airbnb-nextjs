
export default function _onTextareaAutosize(e: any, elementRef: any){
    const target =  e.target as HTMLTextAreaElement;
    elementRef.current.style.height = "60px";
    elementRef.current.style.height = `${target.scrollHeight + 10}px`;
}