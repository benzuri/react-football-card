import '../App.css'
import React from "react"
import Player from '../interfaces/Player'

interface Props {
    player: Player
}

interface State {
    playerImage: string,
    countryImage: string
}

class PlayerCard extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            playerImage: "",
            countryImage: ""
        };
    }

    setImages() {
        this.setState({
            playerImage: 'https://tmssl.akamaized.net/images/wappen/homepageWappen150x150/' + (this.props.player && this.props.player.club && this.props.player.club.id) + '.png',
            countryImage: '/public/flags/' + (this.props.player && this.props.player.placeOfBirth && this.props.player.placeOfBirth.country.toLowerCase()) + '.svg'
        });
    }

    componentDidMount() {
        this.setImages();
    }

    render() {
        return (
            <div className="fut-player-card mx-auto" key={this.props.player.id}>
                <div className="player-card-top">
                    <div className="player-master-info">
                        <div className="player-rating"><span>{this.props.player.shirtNumber}</span></div>
                        <div className=""><span>{this.props.player.marketValue}</span></div>
                        <div className="player-nation"><img src={this.state.countryImage} draggable="false" /></div>
                        <div className="player-club"><img src={this.state.playerImage} draggable="false" /></div>
                    </div>
                    <div className="player-picture">
                        <img className="rounded-lg shadow" src={this.props.player.imageURL} alt={this.props.player.name} draggable="false" />
                    </div>
                </div>

                <div className="player-card-bottom">
                    <div className="player-info">

                        <div className="player-name"><span>{this.props.player.name}</span></div>
                        <div className="text-center"><span>{this.props.player && this.props.player.club && this.props.player.club.name}</span></div>

                        <div className="player-features">
                            <div className="player-features-col text-sm">
                                <span>
                                    <div className="player-feature-value">{this.props.player.age}</div>
                                    <div className="player-feature-title">YEARS</div>
                                </span>
                                <span>
                                    <div className="player-feature-value">{this.props.player.height}</div>
                                </span>
                            </div>
                            <div className="player-features-col text-sm">
                                <span>
                                    <div className="player-feature-value">{this.props.player.foot}</div>
                                    <div className="player-feature-title">FOOT</div>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PlayerCard;