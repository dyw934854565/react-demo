import React from 'react'
function SayHello(props) {
	if (props.name) {
		return <p>hello, {props.name}</p>;
	} else {
		return <p>请先登录</p>
	}
}
export default SayHello