import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  html{
    background-color:#222222;    
  }
  ::-webkit-scrollbar {
    background: #f1f1f1;
    width:5px;
  }
  ::-webkit-scrollbar-thumb {
    background: #222222;}
  .App {
  text-align: center;
  background-color:#222222;
  
}
.logo{
  -webkit-animation:spin 4s linear infinite;
    -moz-animation:spin 4s linear infinite;
    animation:spin 4s linear infinite;
}
h3{
  font-size:40px;
  font-weight:900;
  color:#f1f1f1;
}
h3:hover{
  color:#f1f1f1;
}

/* cards area */
.Navbar{
position:fixed;
}
.itens {
    border-radius:10px; 
background-color:#373943;
height:420px;
width:auto;
box-shadow: 5px 10px #888888;

}
.cards{
    top:10px;
border:2px;
background: #222222;
color:#e1e1e1;
    &a{
    color:#e1e1e1;
    }
}
.PriceItem{
    color:#e1e1e1;
    background-color: transparent ;
    border: 1.5px solid #379353;
    border-radius:28px;

}
.TypePrice{
    color:#379353;
    text-decoration:none;
}
.TypePrice:hover{
    color:#379353;
    cursor: auto;
}
&:hover{
    color:#379353;

}


/* form */
h1{
    color:#f1f1f1;

}
h1:hover{
  color:#f1f1f1;
}


form {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    background: transparent;
    color: #ffffff;
    opacity: 0.8;
    outline: 0;
    border-width: 0 0 2px;
    border-color: #ffffff;
    
  }
  textarea{
    background-color: transparent;
    border:none;
    font-size:20px;
    width:600px;
  }
  label{
    background-color: transparent;
    
  }
  input {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    background-color: transparent;
    color: #ffffff;
    opacity: 0.8;
    outline: 0;
    border-width: 0 0 2px;
    border-color: #373943;
    width:600px;
  }
  input:focus {
    border-color: #379353;
    transition: 0.4s;
  }
}
.form textarea,textarea:focus {
  border-color: #379353;
  transition: 0.4s;
  background: transparent;
}
.form textarea::placeholder {
  color: #ffffff;
  font-size: 18px;
}
.btn {
  z-index: 1;
  position: relative;
  background: #373943 0% 0% no-repeat padding-box;
  color: #ffffff;
  top:10px;
  border: transparent;
  cursor: pointer;
  border-radius: 31px;
  width: 210px;
  height: 55px;
  opacity: 1;
  transition-duration: 0.4s;

  &:hover {
    opacity: 0.9;
    color: #ffffff;
  }
}
.footer{
    margin-top:20px;
    color:#f1f1f1;
    background-color:#373943;
    letter-spacing:1.5px;
    a{
        color:#f1f1f1;
        text-decoration:underline;
    }
    a:hover{
        opacity:.8;
    }
}

@media  (max-width: 600px)
{
      h1,form,footer{
      position: relative;
      top: 2rem;
  }
  textarea,input{
    max-width:278px;
  } 
  
  /* segundo grid */
  .abaixo{
      position: relative;
      top:1rem;
  }
  .itens{
      height:120rem;
  margin-left:auto;
  margin-right: auto;

  }
  .cards{
      margin-left:auto;
  margin-right: auto;

  }
}
@-moz-keyframes spin { 
    100% { -moz-transform: rotate(360deg); } 
}
@-webkit-keyframes spin { 
    100% { -webkit-transform: rotate(360deg); } 
}
@keyframes spin { 
    100% { 
        -webkit-transform: rotate(360deg); 
        transform:rotate(360deg); 
    } 
}
`;
 
export default GlobalStyle;