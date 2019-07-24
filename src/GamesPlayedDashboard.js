import React from 'react'
import SectionHeader from './SectionHeader'
import PlayerSubmissionForm from './PlayerSubmissionForm'
import PlayersList from './PlayersList'
import ShowOrHideButton from './ShowOrHideButton'
import Player from './PlayerClass'

class GamesPlayedDashboard extends React.Component {
	State = {
		players:[
			{firstName: 'Sergio', lastName: 'Cabral', username: 'scabralo', gamesCount: 0},
			{firstName: 'Antonio', lastName: 'Ogando', username: 'enigmasac', gamesCount: 0},
		],
		showGames: true
	}
	render() {
		const {players, showGames} = this.State
		return (
			<div>
				<SectionHeader headerText={'Add a Player'} />
				<PlayerSubmissionForm  />
				<PlayersList players={players} showGames={showGames} />
				<ShowOrHideButton onClickHandler={()=> console.log('Show Or Hide clicked!')} buttonText={'Hide the Number of Games Played'} />
			</div>
		)
	}
}

export default GamesPlayedDashboard