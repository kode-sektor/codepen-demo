
import React, {useState} from 'react'
import Editor from './Editor'

function App () {
	return (
		<>
			<div className="pane top-pane">
				<Editor 
					language="xml"
					displayName="HTML"
					value={}
					onChange={} 
				/>
				<Editor />
				<Editor />
			</div>
			<div className="pane">
				<iframe src="" frameborder="0" title="output" sandbox="allow-scripts" width="100%" height="100%"></iframe>
			</div>
		</>
	);
}

export default App;
