import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

  body{
    background-color:#222222;
    font-family: 'Poppins';
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
.TopGrid{
  /* background-color:#f1f1f1; */
}
.CardLink{
  
  color:#222222;
  background-color:transparent;
  text-decoration:none;
}
.logo{
  -webkit-animation:spin 4s linear infinite;
    -moz-animation:spin 4s linear infinite;
    animation:spin 4s linear infinite;
}
h2{
  text-align:left;
  font-size:30px;
  font-weight:900;
  color:#f1f1f1;
}
h3{
  
  font-size:40px;
  font-weight:900;
  color:#f1f1f1;
}
h3,h2:hover{
  color:#f1f1f1;
}
p{
  font-size:30px;
  color:#cccccc;
  opacity:0.9;
  transition:1s;
}
p:hover{
  color:#cccccc;
  background: -webkit-linear-gradient(#eee, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition:1s;
}

.img-10{
  height:500px;
}
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

.max-w{
  text-align:left;
  /* max-width:400px; */
}
form {
    font-family: 'Poppins';
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
    font-family: 'Poppins';
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
  .CardHeader{
    margin-left:auto;
    margin-right:auto;
    width:20rem !important;
  }
  .img-10{
    height:300px;
  }
  h3{
    text-shadow: 2px 0 0 #222222, -2px 0 0 #222222, 0 2px 0 #222222, 0 -2px 0 #222222, 1px 1px #222222, -1px -1px 0 #222222, 1px -1px 0 #222222, -1px 1px 0 #222222;
  }
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

.More{
  content:'Mostrar menos';
  color:#f1f1f1;
  background-color:transparent;
  border:transparent;
}
.More:hover{
  color:#f1f1f1;
  border-radius:2px;
  background-color:transparent;
  border-bottom: 2px solid #373943;  
}
.More:focus{
background:transparent;
content:'ver menos';
border:transparent;
outline: 0 !important;
}
.More:active{
  content:'Mostrar menos';
}

`;
 
export default GlobalStyle;