
// import {useEffect,useState} from "react";
// import {upload,Auth} from "../firebase";


// export default function Profile(){
//     const currentUser = Auth();
//     const [photo,setPhoto] =useState(null);
//     const [loading,setLoading] =useState(false);
//     const [photoURL,setPhotoURL] = useState("https://media-exp1.licdn.com/dms/image/C5603AQEyVLFSfD-5xg/profile-displayphoto-shrink_400_400/0/1646283389362?e=1652918400&v=beta&t=VL0df3eHkFbWgCRsYW6ouMKca9GjoYsTA8cA2xMQlVA")


//     function handleChange(){
//   if(e.target.files[0]){
//       setPhoto(e,target.files[0])
//   }
//     }

//     function handleClick(){
   
//     upload(photo,currentUser,setLoading);

//     }
//     useEffect(()=>{
//         if(currentUser?.photoURL)
//        { setPhotoURL(currentUser.photoURL);}

//     },[currentUser])



// return(
//     <div className="fields">

//         <input type ="file" onChange={handleChange}/>

//             <button disabled = {loading||!photo} onClick ={handleClick}> Upload</button>

//             <img src={photoURL} alt="avatar" className="avatar"/>
        

//     </div>
// )


// }