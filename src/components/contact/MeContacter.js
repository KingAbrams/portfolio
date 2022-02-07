import Button from "../Button";
// import {useState} from 'react'
import {useForm} from 'react-hook-form'
import boutonEnvoyer from '../../icon/bouton-envoyer.svg';

function MeContacter() {

    // const [nom, setNom] = useState('');
    // const [email, setEmail] = useState('');

    // function handleNom(e) {
    //     setNom(e.target.value);
    // }

    // function handleEmail(e) {
    //     setEmail(e.target.value);
    // }

    // const handleSubmit = (e) => {
    //     alert(nom, email)
    // }
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

  return (
        // <form action="" className="MeContacter" onSubmit={(e) => {handleSubmit(e)}}>
        <form action="" className="MeContacter" onSubmit={handleSubmit(onSubmit)}>
            <div className="nom">
                <div>
                    <label >Nom</label>
                </div>
                <div className="contenuInput">
                    {/* <input type="text" id="nom" value={nom} onChange={handleNom}/> */}
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
                    <textarea rows="20" id="message" {...register("texte", {
                            required: 'Entrer votre Message'
                            })
                        }></textarea>
                </div>
                {/* <br /> */}
                <span>{errors.texte && "Oups, vous avez oublié votre message!"}</span>
            </div>

            <div className="btnSendMsg">
                <Button nom='Envoyer' btnEnvoyer={boutonEnvoyer} />
            </div>
        </form>
  );
}

export default MeContacter;
