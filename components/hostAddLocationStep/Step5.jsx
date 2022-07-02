import { useEffect } from "react";

function Step5({ files, setReturnFiles }) {
    
    const _ShowMiniature = (e) => {
        if(!e.currentTarget.files[0]) return;
        setReturnFiles([...files, ...e.target.files])
    }

    useEffect(() => {
        console.log(files.length)
        if(files.length === 0) return;
        document.getElementById('show').innerHTML = '';
        for (let index = 0; index < files.length; index++) {
            const reader = new FileReader();
            reader.onload = function(e) {
              document.getElementById('show').innerHTML += `<img class="rounded-lg" alt="" src="${ e.target.result }"/>`
            }
            reader.readAsDataURL(files[index]);
        }
    }, [files]);


    return (
        <div className='flex flex-col'>
            <h3 className='text-lg font-semibold'>Etape 5: Ajouter des photos de votre location</h3>
            <div className='flex flex-col mt-10'>
                <div id='show' className="grid grid-cols-2 gap-5"></div>
                <input 
                    type='file'
                    accept='image/*'
                    multiple={true}
                    name='preview-location'
                    className="w-full h-32 p-5 mt-5 border-2 border-dashed rounded-lg"
                    onChange={(e) => _ShowMiniature(e)}
                />
            </div>
        </div>
    )
}

export default Step5;