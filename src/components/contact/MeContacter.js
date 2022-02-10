import Button from "../Button";
import {useForm} from 'react-hook-form'
import boutonEnvoyer from '../../icon/bouton-envoyer.svg';

import emailjs from 'emailjs-com'
import { toast } from "react-toastify";

function MeContacter() {

    const { register,handleSubmit, formState: { errors } } = useForm();
    const onError = (errors, e) => {
        toast.error('Veuillez remplir tous les champs')
    }

    const onSubmit = (data, e) =>{
        emailjs.sendForm(
            'service_o1gfpdf',
            'template_96qmrfn',
            e.target,
            'user_zEQ8jgknRk347hJBGDLzP'
        ).then(res => {
            toast.success('Message envoyé')
            }
        ).catch(err => {
            toast.warn('Probleme de connexion')
            }
        );  
    } 
        
        
  return (
      
        <form className="MeContacter" onSubmit={handleSubmit(onSubmit, onError)}>
            <div className="nom">
                <div>
                    <label >Nom</label>
                </div>
                <div className="contenuInput">
                    <input type="text" id="nom" 
                        {...register("Nom", {
                            required: 'Entrer votre Nom', 
                            maxLength: 80
                            })
                        } 
                    />
                </div>
                <span>{errors.Nom && errors.Nom.message}</span>
            </div>

             <div className="email">
                <div>
                    <label>Email</label>
                </div>
                <div className="contenuInput">
                    <input type="text" id="email" 
                        {...register("Email", {
                            required: 'Entrer votre e-mail', 
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Adresse e-mail invalide"
                            }
                            })
                        } 
                    />
                </div>
                <span>{errors.Email && errors.Email.message}</span>
            </div>

            <div className="projet">
                <div>
                    <label>Projet</label>
                </div>
                <div className="contenuInput">
                    <input type="text" id="projet" 
                        {...register("projet", { 
                            maxLength: 100
                            })
                        } 
                    />
                </div>
            </div>

            <div className="message">
                <div>
                    <label>Message</label>
                </div>
                <div className="contenuInput">
                    <textarea rows="12" id="message" {...register("texteMessage", {
                            required: 'Entrer votre Message'
                            })
                        }></textarea>
                </div>
                {/* <br /> */}
                <span>{errors.texteMessage && "Oups, vous avez oublié votre message!"}</span>
            </div>

            <div className="btnSendMsg">
                <Button nom='Envoyer' btnEnvoyer={boutonEnvoyer} />
            </div>
        </form>
  );
}

export default MeContacter;
