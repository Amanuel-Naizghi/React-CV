import headerIcon from '../assets/resume-icon.png';
import downloadIcon from '../assets/downloadIcon.png';
import jsPDF from 'jspdf';;
import html2canvas from 'html2canvas';
function Header(){
    //Used for downloading the html file as pdf
    const handleDownloadPDF=()=>{
    const input=document.querySelector('.resume-display');
        html2canvas(input) 
        .then(canvas => { const imgWidth = 210; // A4 size in mm
         const pageHeight = 295; // A4 size in mm 
         const imgHeight = (canvas.height * imgWidth) / canvas.width; 
         const heightLeft = imgHeight; 
         const pdf = new jsPDF('p', 'mm', 'a4'); 
         let position = 0; 
         pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, position, imgWidth, imgHeight); 
         pdf.save('download.pdf'); })
    };

    return(
        <div className='header'>
            <div className="image-container">
                <img className="resume-icon" src={headerIcon} alt="resume-icon" />   
                <h1>Resume Builder</h1>
            </div>
            <button className='download-button' onClick={handleDownloadPDF}>
                <p>Download CV</p>
                <img src={downloadIcon} alt="" className="download" />
            </button>   
        </div>
    );
}

export{Header};