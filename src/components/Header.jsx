import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faEarthEurope} from "@fortawesome/free-solid-svg-icons"

export default function Header() {

	return (
		<header>
			<FontAwesomeIcon icon={faEarthEurope} className="header--logo"/>
			<h1 className="header--title">my travel journal</h1>
		</header>
	)
}