import React, {useState} from "react";
 import {  Container} from 'react-bootstrap';
import swal from 'sweetalert2'

export default function Cards() {
    const [userData, setUserData] = useState({
        name:"",
        email:"",
        message:"",

      });
      let name, value;
      const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;
        setUserData({...userData, [name]:value});
      };


      // connect with firebase 
      const submitData = async (event) =>{
        event.preventDefault();
        const{name, email,message} = userData;
        const res = await fetch
        ("https://test-marcos-2ec79-default-rtdb.firebaseio.com//usersmessages.json",
        {
          method:"POST",
          headers: {
            "Content-Type":"application/json",
          },
          body:JSON.stringify({
            name,
            email,
            message
          })
        }
      );
      if(res){
        new swal(
        
            'Recebemos sua mensagem!',
            'Em breve retornaremos.',
            'success'     
        )
      }else{
        alert("Algo de errado aconteceu, por favor tente novamente mais tarde.");
      }
    };
    return (
        
        <>
        <Container>
        <h1 className='mt-5'>Se deseja entrar em contato sobre nossos NFTs, basta enviar uma mensagem</h1>
       <form className='mt-5' name="contact" method="POST" data-netlify="true" >
       <div>
       <label>
       
           <textarea required name="message" placeholder="Digite sua messagem" 
        value={userData.message}
        onChange={postUserData}
       ></textarea>
       
       </label> 
       </div>
       
       <div>
         <label>
             <input   type="text" name="name" required placeholder="Seu nome" 
          value={userData.name}
          onChange={postUserData}
         />
         </label>   
         </div>
       
       <div>
         <label>
             <input required type="email"  name="email" placeholder="Seu E-mail" 
         value={userData.email}
         onChange={postUserData}
         />
         </label>
         </div>
       
         <button type="submit" className="btn"
         onClick={submitData}
         >Enviar</button>
       
     </form>
     </Container>
     <footer className='mt-5' id="contato">
         <div class="text-center p- footer">
          Feito com ❤️, por
    <a href="https://github.com/horberlan">Pois.nada</a>
  </div>
     </footer>
     
        </>
    )

    }