import headerIcon from '../assets/resume-icon.png';
import downloadIcon from '../assets/downloadIcon.png';

function Header(){
    return(
        <div className='header'>
            <div className="image-container">
                <img className="resume-icon" src={headerIcon} alt="resume-icon" />   
                <h1>Resume Builder</h1>
            </div>
            <button className='download-button'>
                <p>Download CV</p>
                <img src={downloadIcon} alt="" className="download" />
            </button>   
        </div>
    );
}

export{Header};