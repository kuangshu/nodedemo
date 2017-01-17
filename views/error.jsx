var React = require('react');
import DefaultLayout from './layout.jsx';

class ErrorMessage extends React.Component {
	render() {
		return (
			<DefaultLayout title="出错了!!!">
				<div>
					<h1>{this.props.err.message}</h1>
					<h2>{this.props.err.status}</h2>
					<p>{this.props.err.stack}</p>
				</div>
			</DefaultLayout>);
	}
}
// can't render
const Errorpage = err =>
	<DefaultLayout title="出错了!!!">
		<div>
			<h1>{err.message}</h1>
			<h2>{err.status}</h2>
			<p>{err.stack}</p>
		</div>
	</DefaultLayout>

export default ErrorMessage;