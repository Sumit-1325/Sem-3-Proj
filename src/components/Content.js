import React from 'react';
import './styles/Content.css';
import Card from './Card';
 import { useNavigate } from 'react-router-dom';
export default function Content() {


 const navigate = useNavigate();

   const handlePostitem = () => {
    navigate('/postitem');
   };
   const handleREFDitem = () => {
    navigate('/reportfditem');
   };
   
   const handleFoundItem =()=> {
    navigate('/founditem');
   };



  return (
    <div className="container ">
      <Card 
        image={'https://smallimg.pngkey.com/png/small/4-44913_plus-sign-clipart-blue-plus-sign.png'} 
        title="PostItem" 
        content_text="Report any Item You Lost" 
        go="Report Lost Item" work={handlePostitem}
      />
      <Card 
      image={'https://parkerlegalteam.com/wp-content/uploads/2020/10/PersonalizedAttention.jpg'} 
      title="FoundItem" 
      content_text="Check Items That Had been Found" 
      go=" found Items " work={handleFoundItem}
      />
      <Card 
       image={'https://png.pngtree.com/png-clipart/20220909/original/pngtree-vector-man-picking-up-something-png-image_8491864.png'} 
       title="Report Found Item " 
       content_text="Report If You Found something"
       go="Report Found Item" work={handleREFDitem}
        />  
      <Card 
       image={'https://th.bing.com/th/id/OIP.-nnIjW9v-SuiglycUBuCNwHaE8?w=275&h=183&c=7&r=0&o=5&pid=1.7'} 
       title="Help" 
       content_text="Need Help"
       go="Help Me"/>
    </div>
  );
}
