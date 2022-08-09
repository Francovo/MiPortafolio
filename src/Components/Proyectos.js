import React from 'react';
import { SiJavascript, SiReact, SiChakraui, SiGithub, SiSass, SiFirebase, SiRedux, SiCss3 } from 'react-icons/si';
import { ImShare } from 'react-icons/im';
import '../styles/Proyectos.scss';

const Proyectos = () => {
	return (
		<div className="Container_All_Proyectos" id="Proyectos">
			<h1>Proyectos</h1>
			<div className="Proyectos">
				<div className="Proyecto">
					<div style={{ pointerEvents: 'none' }}>
						<img src="https://res.cloudinary.com/aca-geek/image/upload/v1658712836/PORTAFOLIO/Captura_de_pantalla_2022-07-24_203340_qwfm1x.png" className="Image" alt="" />
						<div className="Info">
							<h1 style={{ fontWeight: '500' }}>E-commerce Vanilla</h1>
							<h2>
								E-commerce de venta de articulos varios, realizado en Js Vanilla y Css Vanilla
								<br />
								<br />
								<b>Para acceder a todas las funcionalidades es recomendable loguearse</b>
							</h2>
							<div className="Tech">
								<h2>
									{' '}
									<SiJavascript
										size={23}
										style={{
											marginBottom: '.8rem',
											marginTop: '.1rem',
										}}
									/>
								</h2>
								<h2>
									<SiCss3 size={22} style={{ marginBottom: '-8px' }} />
								</h2>
							</div>
							<div className="LinkProyectos">
								<a style={{ color: '#cdcdff' }} href="https://github.com/Francovo/e_commerce_jsVanilla_oracle" target="_blank" rel="noreferrer">
									<SiGithub size={23} />
								</a>
								<a style={{ color: '#cdcdff' }} href="https://e-commerce-js-vanilla.vercel.app" target="_blank" rel="noreferrer">
									<ImShare size={23} style={{}} />
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="Proyecto">
					<div style={{ pointerEvents: 'none' }}>
						<img src="https://res.cloudinary.com/aca-geek/image/upload/v1655758938/PORTAFOLIO/NotSpotify_bojnz8.png" className="Image" alt="" />
						<div className="Info">
							<h1 style={{ fontWeight: '500' }}>Visualizador de Spotify</h1>
							<h2>
								Aqui podras visualizar artistas, album, canciones de Spotify
								<br />
								<br />
								<b>Es recomendable utilizar estos datos al Loguearse:</b>
								<br />
								testingdev28@gmail.com <br />
								test123*
							</h2>
							<div className="Tech">
								<h2>
									{' '}
									<SiJavascript
										size={23}
										style={{
											marginBottom: '.8rem',
											marginTop: '.1rem',
										}}
									/>
								</h2>
								<h2>
									<SiReact size={22} style={{}} />
								</h2>
								<h2>
									<SiChakraui
										size={25}
										style={{
											marginBottom: '.8rem',
										}}
									/>
								</h2>
							</div>
							<div className="LinkProyectos">
								<a style={{ color: '#cdcdff' }} href="https://github.com/Francovo/Not_Spotify" target="_blank" rel="noreferrer">
									<SiGithub size={23} />
								</a>
								<a style={{ color: '#cdcdff' }} href="https://prueba-tecnica-body-tech.vercel.app" target="_blank" rel="noreferrer">
									<ImShare size={23} style={{}} />
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="Proyecto">
					<div style={{ pointerEvents: 'none' }}>
						<img src="https://res.cloudinary.com/aca-geek/image/upload/v1655756956/PORTAFOLIO/VisualizadorGithub_qaktcn.png" className="Image" width="280px" height="100px" alt="" />
						<div className="Info">
							<h1 style={{ fontWeight: '500' }}>Github Info</h1>
							<h2 style={{ marginBottom: '4.5rem' }}>Aqui podras encontrar a Cualquier persona dentro de Github Permitiendote añadirla a la lista, Editar su usuario Y Eliminarlo</h2>
							<div className="Tech">
								<h2>
									{' '}
									<SiJavascript
										size={23}
										style={{
											marginBottom: '.8rem',
											marginTop: '.1rem',
										}}
									/>
								</h2>
								<h2>
									<SiReact size={22} style={{}} />
								</h2>
								<h2>
									<SiChakraui
										size={25}
										style={{
											marginBottom: '.8rem',
										}}
									/>
								</h2>
							</div>
							<div className="LinkProyectos">
								<a style={{ color: '#cdcdff' }} href="https://github.com/Francovo/Prueba-TecnicaAcaGeek/tree/main" target="_blank" rel="noreferrer">
									<SiGithub size={23} />
								</a>
								<a style={{ color: '#cdcdff' }} href="https://prueba-tecnica-aca-geek.vercel.app/RegistroData1" target="_blank" rel="noreferrer">
									<ImShare size={23} style={{}} />
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="Proyecto">
					<div style={{ pointerEvents: 'none' }}>
						<img src="https://res.cloudinary.com/aca-geek/image/upload/v1656004763/PORTAFOLIO/Peliculas_ghm9cf.png" className="Image" width="280px" height="100px" alt="" />
						<div className="Info">
							<h1 style={{ fontWeight: '500' }}>Peliculas</h1>
							<h2 style={{ marginBottom: '4.5rem' }}>Podras ver informacion acerca de las ultimas peliculas publicadas, sus calificaciones, y mucho mas!!</h2>
							<div className="Tech">
								<h2>
									{' '}
									<SiJavascript
										size={23}
										style={{
											marginBottom: '.8rem',
											marginTop: '.1rem',
										}}
									/>
								</h2>
								<h2>
									<SiReact size={22} style={{}} />
								</h2>
								<h2>
									<SiFirebase
										size={25}
										style={{
											marginBottom: '.8rem',
										}}
									/>
								</h2>
								<h2>
									<SiRedux
										size={25}
										style={{
											marginBottom: '.8rem',
										}}
									/>
								</h2>
								<h2>
									<SiSass
										size={25}
										style={{
											marginBottom: '.8rem',
										}}
									/>
								</h2>
							</div>
							<div className="LinkProyectos">
								<a style={{ color: '#cdcdff' }} href="https://github.com/Francovo/Sprint3Grupo7" target="_blank" rel="noreferrer">
									<SiGithub size={23} />
								</a>
								<a style={{ color: '#cdcdff' }} href="https://sprint3-grupo7.vercel.app/home" target="_blank" rel="noreferrer">
									<ImShare size={23} style={{}} />
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="Proyecto">
					<div style={{ pointerEvents: 'none' }}>
						<img
							src="https://res.cloudinary.com/aca-geek/image/upload/v1660012033/PORTAFOLIO/Captura_de_pantalla_2022-08-08_212630_seangd.png"
							className="Image"
							width="280px"
							height="100px"
							alt=""
						/>
						<div className="Info">
							<h1 style={{ fontWeight: '500' }}>Marvel Comics</h1>
							<h2 style={{ marginBottom: '4.5rem' }}>Podras acceder a datos acerca de Comics/Series/Personajes de marvel comics </h2>
							<div className="Tech">
								<h2>
									{' '}
									<SiJavascript
										size={23}
										style={{
											marginBottom: '.8rem',
											marginTop: '.1rem',
										}}
									/>
								</h2>
								<h2>
									<SiReact size={22} style={{}} />
								</h2>
								<h2>
									<SiFirebase
										size={25}
										style={{
											marginBottom: '.8rem',
										}}
									/>
								</h2>
								<h2>
									<SiRedux
										size={25}
										style={{
											marginBottom: '.8rem',
										}}
									/>
								</h2>
								<h2>
									<SiSass
										size={25}
										style={{
											marginBottom: '.8rem',
										}}
									/>
								</h2>
							</div>
							<div className="LinkProyectos">
								<a style={{ color: '#cdcdff' }} href="https://github.com/Francovo/Marvel_Comics" target="_blank" rel="noreferrer">
									<SiGithub size={23} />
								</a>
								<a style={{ color: '#cdcdff' }} href="https://marvel-comics-six.vercel.app" target="_blank" rel="noreferrer">
									<ImShare size={23} style={{}} />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Proyectos;
