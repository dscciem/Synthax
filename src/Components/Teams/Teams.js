import "./Teams.css";
import utsa from "./assets/utsa.jpg";
import aryan from "./assets/Aryan.jpg";
import suman from "./assets/suman.jpg";
import linkedin from "./assets/linkedin.png";
import github from "./assets/github.png";
import ananya from "./assets/Ananya.jpg";
function Teams() {
  return (
    <div className="teams__container-body" id="Teams">
      <div className="teams__heading">
        <h1 className="teams__teams">
          Teams
          <hr />
        </h1>
      </div>

      <div className="teams__first-row">
        <div className="teams__card">
          <div className="teams__profile-pic-container">
            <img
              src="https://avatars.githubusercontent.com/u/55796944?v=4"
              alt="Avatar"
              className="teams__profile-pic"
            />
          </div>
          <div className="teams__container">
            <h4>
              <b>Avinash Ranjan</b>
            </h4>
            <p>GDSC Lead</p>
            <div className="teams__social-media">
              <a
                href="https://www.linkedin.com/in/avinashkranjan?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAABaySwEBIt2YPcteycgefm3Ctsx0jUxLSeI&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BBQ74yvQoSxeWXpMsw9AzBg%3D%3D"
                alt="Avinash Linkedin"
              >
                <img
                  src={linkedin}
                  alt="Avinash Linkedin"
                  className="teams__linkedin"
                ></img>
              </a>
              <a href="https://github.com/avinashkranjan">
                <img
                  src={github}
                  alt="Avinash Github"
                  className="teams__github"
                ></img>
              </a>
            </div>
          </div>
        </div>
        <div className="teams__card">
          <div className="teams__profile-pic-container">
            <img
              src="https://avatars.githubusercontent.com/u/66238394?v=4"
              alt="Tech Lead"
              className="teams__profile-pic"
            />
          </div>
          <div className="teams__container">
            <h4>
              <b>Srijan Gupta</b>
            </h4>
            <p>Tech Lead</p>
            <div className="teams__social-media">
              <a
                href="https://www.linkedin.com/in/srijankrgupta/"
                alt="Avinash Linkedin"
              >
                <img
                  src={linkedin}
                  alt="Avinash Linkedin"
                  className="teams__linkedin"
                ></img>
              </a>
              <a href="https://github.com/geekymeeky">
                <img
                  src={github}
                  alt="Avinash Github"
                  className="teams__github"
                ></img>
              </a>
            </div>
          </div>
        </div>
        <div className="teams__card">
          <div className="teams__profile-pic-container">
            <img
              src="https://avatars.githubusercontent.com/u/70858557?v=4"
              alt="Campus Lead"
              className="teams__profile-pic"
            />
          </div>
          <div className="teams__container">
            <h4>
              <b>Madiha Mallick</b>
            </h4>
            <p>Women-in-Tech Lead</p>
            <div className="teams__social-media">
              <a
                href="https://www.linkedin.com/in/madiha-mallick-4410a1207?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADSEIzEBY29jXtV5YGibpxDiINF788yDml8&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BEWsfw9q6T4%2BEm5Pt1nR%2BDg%3D%3D"
                alt="Avinash Linkedin"
              >
                <img
                  src={linkedin}
                  alt="Avinash Linkedin"
                  className="teams__linkedin"
                ></img>
              </a>
              <a href="https://github.com/madihamallick">
                <img
                  src={github}
                  alt="Avinash Github"
                  className="teams__github"
                ></img>
              </a>
            </div>
          </div>
        </div>
        <div className="teams__card">
          <div className="teams__profile-pic-container">
            <img src={ananya} alt="Avatar" className="teams__profile-pic" />
          </div>
          <div className="teams__container">
            <h4>
              <b>Ananya Chaterjee</b>
            </h4>
            <p>Public Relations and Creative Lead</p>
            <div className="teams__social-media">
              <a
                href="https://www.linkedin.com/in/ananya-chatterjee-416b451ab?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADEc3BIB151CKS5tPxBeFKMhMBaEZVtnUlY&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3Bl0TjW93kQXSrf%2FMQuVQJrw%3D%3D"
                alt="Ananya Linkedin"
              >
                <img
                  src={linkedin}
                  alt="Ananya Linkedin"
                  className="teams__linkedin"
                ></img>
              </a>
              <a href="https://github.com/Ananya-012">
                <img
                  src={github}
                  alt="Ananya Github"
                  className="teams__github"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="teams__first-row">
        <div className="teams__card">
          <div className="teams__profile-pic-container">
            <img
              src="https://avatars.githubusercontent.com/u/70687014?v=4"
              alt="DSC LEad"
              className="teams__profile-pic"
            />
          </div>
          <div className="teams__container">
            <h4>
              <b>Abir Bhattacharya</b>
            </h4>
            <p>Competitive Coding Lead</p>
            <div className="teams__social-media">
              <a
                href="https://www.linkedin.com/in/abir-bhattacharya-6982551a9?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADCf4pQBQf0tmz4JoLXZdqmpenKqmgevu34&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3Bqp4m%2FwC0QxaDUSMOWvxCMA%3D%3D"
                alt="Abir Linkedin"
              >
                <img
                  src={linkedin}
                  alt="Abir Linkedin"
                  className="teams__linkedin"
                ></img>
              </a>
              <a href="https://github.com/abirbhattacharya82">
                <img
                  src={github}
                  alt="Abir Github"
                  className="teams__github"
                ></img>
              </a>
            </div>
          </div>
        </div>
        <div className="teams__card">
          <div className="teams__profile-pic-container">
            <img
              src="https://scontent.fccu3-1.fna.fbcdn.net/v/t1.6435-9/67432988_2372492119664895_765072883897597952_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=6vVWohZ-_68AX8zFqZx&_nc_ht=scontent.fccu3-1.fna&oh=ada21796b939c7ab457572835da53938&oe=6163B586"
              alt="Campus Lead"
              className="teams__profile-pic"
            />
          </div>
          <div className="teams__container">
            <h4>Shashank Ranjan</h4>
            <p>Outreach Lead</p>
            <div className="teams__social-media">
              <a
                href="https://www.linkedin.com/in/shashank-ranjan-318485149?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAACPX64QBgABrHiczubc8fcHzoYo98umm1e4&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BLHZSv4GQRDKwV%2Bmb%2B8TU9w%3D%3D"
                alt="Shashank Linkedin"
              >
                <img
                  src={linkedin}
                  alt="Shasank Linkedin"
                  className="teams__linkedin"
                ></img>
              </a>
              <a href="https://github.com/Shashankranjan-dev">
                <img
                  src={github}
                  alt="Shasank Github"
                  className="teams__github"
                ></img>
              </a>
            </div>
          </div>
        </div>
        <div className="teams__card">
          <div className="teams__profile-pic-container">
            <img src={suman} alt="Avatar" className="teams__profile-pic" />
          </div>
          <div className="teams__container">
            <h4>
              <b>Suman Choubey</b>
            </h4>
            <p>Core Team Member</p>
            <div className="teams__social-media">
              <a
                href="https://www.linkedin.com/in/suman-choubey-630949219?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADcigEQBaclRl_GX9BJ5RM5vIU1yXLuL_aE&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BR2erH%2BTFQJayJ668ekz28w%3D%3D"
                alt="Suman Linkedin"
              >
                <img
                  src={linkedin}
                  alt="Suman Linkedin"
                  className="teams__linkedin"
                ></img>
              </a>
              <a href="https://github.com/suman2662021">
                <img
                  src={github}
                  alt="Suman Github"
                  className="teams__github"
                ></img>
              </a>
            </div>
          </div>
        </div>
        <div className="teams__card">
          <div className="teams__profile-pic-container">
            <img
              src="https://media-exp1.licdn.com/dms/image/C5603AQHADHhaG-fozQ/profile-displayphoto-shrink_200_200/0/1630738982439?e=1637193600&v=beta&t=N5HUkl4XBoN6fskKALQbjqEG9DezG7khm59uSBzTuY0"
              alt="DSC LEad"
              className="teams__profile-pic"
            />
          </div>
          <div className="teams__container">
            <h4>
              <b>Mrigank Choudhury</b>
            </h4>
            <p>Core Team Member</p>
            <div className="teams__social-media">
              <a
                href="https://www.linkedin.com/in/mrigank-choudhary-712265199?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAC59c74BUlAtu-8m0O-vCjcbPZuRl47OqUM&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BOvj5UGAySjybkqjBftTgHQ%3D%3D"
                alt="Mrigank Linkedin"
              >
                <img
                  src={linkedin}
                  alt="Mrigank Linkedin"
                  className="teams__linkedin"
                ></img>
              </a>
              <a href="https://github.com/mrigankchoudhary">
                <img
                  src={github}
                  alt="Mrigank Github"
                  className="teams__github"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="teams__first-row">
        <div className="teams__card">
          <div className="teams__profile-pic-container">
            <img
              src="https://media-exp1.licdn.com/dms/image/C5603AQHpDNCY7YswZQ/profile-displayphoto-shrink_800_800/0/1597464677078?e=1637193600&v=beta&t=cYAWFEtBeHFdeXh4f1w9iOsRj-EgHt7PuFUQDWvHCL0"
              alt="Campus Lead"
              className="teams__profile-pic"
            />
          </div>
          <div className="teams__container">
            <h4>
              <b>Hasibul Islam Sazzad</b>
            </h4>
            <p>Core Team Member</p>
            <div className="teams__social-media">
              <a
                href="https://www.linkedin.com/in/hasibul12?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAC4Cn-IBHb6FApyNxVan-qjm1cc0LsQ7f1A&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BLENeQVn2Rk6NAMj9q%2BoOeA%3D%3D"
                alt="Hasibul Linkedin"
              >
                <img
                  src={linkedin}
                  alt="Hasibul Linkedin"
                  className="teams__linkedin"
                ></img>
              </a>
              <a href="https://github.com/hasibul9303">
                <img
                  src={github}
                  alt="Hasibul Github"
                  className="teams__github"
                ></img>
              </a>
            </div>
          </div>
        </div>
        <div className="teams__card">
          <div className="teams__profile-pic-container">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4E03AQHSaJ8sOolu4Q/profile-displayphoto-shrink_800_800/0/1624517563406?e=1637193600&v=beta&t=qc24_rPI8C2Kl6QEGEQM51bRFRxq8QZiOasajWk2jIw"
              alt="Avatar"
              className="teams__profile-pic"
            />
          </div>
          <div className="teams__container">
            <h4>
              <b>Manidipa Bhattacharjee</b>
            </h4>
            <p>Core Team Member</p>
            <div className="teams__social-media">
              <a
                href="https://www.linkedin.com/in/manidipa-bhattacharjee-510a081b7?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADKEYNwBQV7_Qex__BwNPgwVNwSqHPnk1Q8&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3B87pPcTBQTlGqCcyKMSXdYA%3D%3D"
                alt="Manidipa Linkedin"
              >
                <img
                  src={linkedin}
                  alt="Manidipa Linkedin"
                  className="teams__linkedin"
                ></img>
              </a>
              <a href="https://github.com/Manidipaaa">
                <img
                  src={github}
                  alt="Manidipa Github"
                  className="teams__github"
                ></img>
              </a>
            </div>
          </div>
        </div>
        <div className="teams__card">
          <div className="teams__profile-pic-container">
            <img src={utsa} alt="DSC LEad" className="teams__profile-pic" />
          </div>
          <div className="teams__container">
            <h4>
              <b>Utsa Chakraborty</b>
            </h4>
            <p>Core Team Member</p>
            <div className="teams__social-media">
              <a href="" alt="Utsa Linkedin">
                <img
                  src={linkedin}
                  alt="Utsa Linkedin"
                  className="teams__linkedin"
                ></img>
              </a>
              <a href="https://github.com/utsachak">
                <img
                  src={github}
                  alt="Utsa Github"
                  className="teams__github"
                ></img>
              </a>
            </div>
          </div>
        </div>
        <div className="teams__card">
          <div className="teams__profile-pic-container">
            <img src={aryan} alt="Avatar" className="teams__profile-pic" />
          </div>
          <div className="teams__container">
            <h4>
              <b>Aryan Akash</b>
            </h4>
            <p>Core Team Member</p>
            <div className="teams__social-media">
              <a
                href="https://www.linkedin.com/in/aryan-akash-896944123?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAB6Sv_IBktIRUUs81jRNDoKMmnjj3mde3j8&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BJEYbvimATzyQ4%2Fqvh0TBow%3D%3D"
                alt="Aryan Linkedin"
              >
                <img
                  src={linkedin}
                  alt="Aryan Linkedin"
                  className="teams__linkedin"
                ></img>
              </a>
              <a href="https://github.com/aryan80akash">
                <img
                  src={github}
                  alt="Aryan Github"
                  className="teams__github"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="teams__first-row">
        <div className="teams__card">
          <div className="teams__profile-pic-container">
            <img
              src="https://avatars.githubusercontent.com/u/70656957?v=4"
              alt="DSC LEad"
              className="teams__profile-pic"
            />
          </div>
          <div className="teams__container">
            <h4>
              <b>Subhradeep Samanta</b>
            </h4>
            <p>Core Team Member</p>
            <div className="teams__social-media">
              <a
                href="https://www.linkedin.com/in/subhradeep-samanta-85236a203/"
                alt="Subhradeep Linkedin"
              >
                <img
                  src={linkedin}
                  alt="Subhradeep Linkedin"
                  className="teams__linkedin"
                ></img>
              </a>
              <a href="https://github.com/Subhradeep10">
                <img
                  src={github}
                  alt="Subhradeep Github"
                  className="teams__github"
                ></img>
              </a>
            </div>
          </div>
        </div>
        <div className="teams__card">
          <div className="teams__profile-pic-container">
            <img
              src="https://user-images.githubusercontent.com/66238394/133470577-48859ca5-c1d5-4c30-88fd-3de129ae4c42.jpeg"
              alt="DSC LEad"
              className="teams__profile-pic"
            />
          </div>
          <div className="teams__container">
            <h4>
              <b>Surottama Roy</b>
            </h4>
            <p>Core Team Member</p>
            <div className="teams__social-media">
              <a
                href="https://www.linkedin.com/in/surottama-roy-96b955219"
                alt="Surottama Linkedin"
              >
                <img
                  src={linkedin}
                  alt="Surottama Linkedin"
                  className="teams__linkedin"
                ></img>
              </a>
              <a href="https://github.com/Surottama">
                <img
                  src={github}
                  alt="Surottama Github"
                  className="teams__github"
                ></img>
              </a>
            </div>
          </div>
        </div>
        <div className="teams__card">
          <div className="teams__profile-pic-container">
            <img
              src="https://user-images.githubusercontent.com/70858557/133451417-8d5d6252-a2ea-49d1-8321-3245ddb3c37a.png"
              alt="Ankit Keshri"
              className="teams__profile-pic"
            />
          </div>
          <div className="teams__container">
            <h4>
              <b>Ankit Keshri</b>
            </h4>
            <p>Core Team Member</p>
            <div className="teams__social-media">
              <a
                href="https://www.linkedin.com/in/iankitkeshri"
                alt="Ankit Linkedin"
              >
                <img
                  src={linkedin}
                  alt="Ankit Linkedin"
                  className="teams__linkedin"
                ></img>
              </a>
              <a href="https://github.com">
                <img
                  src={github}
                  alt="Ankit Github"
                  className="teams__github"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teams;
