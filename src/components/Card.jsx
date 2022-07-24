export default function Card(props) {
	return (
		<>
			<div className='card w-96 bg-base-100 shadow-xl'>
				<a href={props.href} target='blank'>
					<figure>
						<img src={props.img} alt={props.alt} />
					</figure>
					<div className='card-body'>
						<h2 className='card-title'>{props.title}</h2>
						<p>{props.text}</p>
					</div>
				</a>
			</div>
		</>
	)
}
