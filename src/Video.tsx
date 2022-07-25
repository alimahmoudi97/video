import {Composition} from 'remotion';
import { Main } from './Main';
import { ScaleUpText } from './SecondVideo/ScaleUpText';
import { SceneOne } from './SecondVideo/SceneOne';
import { SceneThree } from './SecondVideo/SceneThree';
import { SceneTwo } from './SecondVideo/SceneTwo';
import { SwitchPage } from './SecondVideo/SwitchPage';
import { TextToUp } from './SecondVideo/TextToUp';
import { TextToUpShow } from './SecondVideo/TextToUpShow';

// Each <Composition> is an entry in the sidebar!

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="Main"
				component={Main}
				durationInFrames={460}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="SceneOne"
				component={SceneOne}
				durationInFrames={280}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="TextToUpShow"
				component={TextToUpShow}
				durationInFrames={60}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={
					{
						TextInput: "SETUP YOUR DEVICE FOR",
						direction: 'column',
						scable:false
					}
				}
			/>
			<Composition
				id="TextToUp"
				component={TextToUp}
				durationInFrames={70}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="ScaleUpText"
				component={ScaleUpText}
				durationInFrames={70}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					TextInput: '100% fiber-optic network',
				}}
			/>
			<Composition
				id="SwitchPage"
				component={SwitchPage}
				durationInFrames={50}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="SceneTwo"
				component={SceneTwo}
				durationInFrames={60}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="SceneThree"
				component={SceneThree}
				durationInFrames={120}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
