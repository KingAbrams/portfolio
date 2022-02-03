import Button from "../Button";
import boutonEnvoyer from '../../icon/bouton-envoyer.svg';

function MeContacter() {
  return (
    <div className="MeContacter">
        <div className="nom">
            <div>
                <label for="nom">Nom</label>
            </div>
            <div>
                <input type="text" id="nom"/>
            </div>
        </div>

        <div className="email">
            <div>
                <label for="email">Email</label>
            </div>
            <div>
                <input type="text" id="email" />
            </div>
        </div>

        <div className="projet">
            <div>
                <label for="projet">Projet</label>
            </div>
            <div>
                <input type="text" id="projet" />
            </div>
        </div>

        <div className="message">
            <div>
                <label for="message">Message</label>
            </div>
            <div>
                <textarea rows="20" id="message"></textarea>
            </div>
        </div>
        <div className="btnSendMsg">
            <Button nom='Envoyer' btnEnvoyer={boutonEnvoyer} />
        </div>
    </div>
  );
}

export default MeContacter;
