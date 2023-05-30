import React from 'react';
import '../styles/Biografia.scss';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const Biografia = () => {
	return (
		<>
			<div className="ContainerAll">
				<div className="Biografia" id="Biografia">
					<div className="Avatar">
					<img  alt="" src="https://res.cloudinary.com/aca-geek/image/upload/v1685411085/Me_vap8nz.jpg" />
					</div>
					<h1>Hola, Soy Franco Velasco</h1>
					<h2>Front End Developer</h2>
					<div className="About_Me">
						<h1 className="ME">
							Bienvenido a mi portafolio, hecha un vistazo y conoce acerca de mi. Quien sabe, talvez podamos trabajar juntos.
							<br />
							Igualmente, me llamo Franco y soy desarrollador web, soy muy proactivo y siempre quiero ser el mejor en lo que hago. <br />
							<br />
							Si estas de acuerdo con eso, nos llevaremos muy bien.
						</h1>
						<div className="Redes">
							<a href="https://www.linkedin.com/in/franvov/" target="_blank" rel="noreferrer">
								<AiFillLinkedin size={30} />
							</a>
							<a href="https://github.com/Francovo" target="_blank" rel="noreferrer">
								<AiFillGithub size={30} />
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Biografia;
