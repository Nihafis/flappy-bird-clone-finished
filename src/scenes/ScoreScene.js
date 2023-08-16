import BaseScene from "./BaseScene";

class ScoreScene extends BaseScene {

    constructor(config) {
        super('ScoreScene', { ...config, canGoback: true });

        this.menu = [
            { scene: 'PlayScene', text: 'Play' },
            { scene: 'ScoreScene', text: 'Score' },
            { scene: null, text: 'Exit' },
        ]
    }
    create() {
        super.create();

        const bestScoreText = localStorage.getItem('bestScore');
        this.add.text(...this.screenCenter, `Best Score: ${bestScoreText || 0}`, this.fontOptions)
            .setOrigin(0.5)
    }
}
export default ScoreScene;


// Create ScoreScene
// Display Best score , you can get from  the local storage