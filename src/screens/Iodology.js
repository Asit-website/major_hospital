import React from 'react'
import { NavLink } from 'react-router-dom'
import doctor from '../images/doctor.png'
const Iodology = () => {
  return (
     <>
        <div className="iodolgy-back">
              <div className="iodo-sect">
                 <h2>Our Ideology</h2>
              </div>
        </div>

        <div className="iodology-section">
            <div className="first-iodo">
                <h2>Our Ideology</h2>
                {/* <h3>Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry</h3> */}
                <p>Major Hospital in association with Centre of Diabetes and Allied sciences  believes in providing personalized and committed treatment services.Our vision is to provide pateint-centered health care where all the patient achieve their Best health and well-being, we keep ourselves educated and use innovative approaches to enhance health care services and strive to deliver quality health care.</p>
               <NavLink to="/contact"><button>Contact us</button></NavLink>
            </div>
            <div className="second-iodo">
                <img src={doctor} alt="" />
            </div>
        </div>

        <div className="aim">
            <h2>What do we aim for in the future?</h2>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
        </div>
     </>
  )
}

export default Iodology