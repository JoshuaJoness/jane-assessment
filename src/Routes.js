import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './views/Home'
import Form from './views/Form'
import Character from './views/Character'

class Routes extends React.Component {
	render () {
		return (<BrowserRouter>
							<Switch>
								<Route path ='/character/:id' component={Character} />
								<Route path ='/form' component={Form} />
								<Route path ='/' component={Home} />
							</Switch>
						</BrowserRouter>
					)
				}
			}	

export default Routes
