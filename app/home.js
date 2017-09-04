import React from 'react';
import Update from './update';
import { Link } from 'react-router';
import MediaQuery from 'react-responsive';
import { get } from './api';
import { LocalDate, LocalTime } from './datetime';

export default class Home extends React.Component {

		postProcess(data) {
				return data.map((m) => {
						console.log('date', m.date);
						let date = new Date(m.date);
						return Object.assign(m, { date, date } );
				});
		}

		componentDidMount() {
				get('2017-18/forecast').then((data) => {
						if ( data ) {
								this.setState({ data: this.postProcess(data) });
						}
				});
		}

		renderEvent(m) {
				if ( m.type === 'training' ) {
						return <span>Trainen</span>;
				} else if ( m.teams !== undefined ) {
						return (
								<span>
										<Link to={`/blijdorp/clubs/${m.teams[0]}`}>{m.teams[0]}</Link> - <Link to={`/blijdorp/clubs/${m.teams[1]}`}>{m.teams[1]}</Link>
								</span>
						);
				}
				return <div/>;
		}

		renderCompact() {
				return this.state && this.state.data && this.state.data.map(m => {
						return (
								<div className='panel panel-default'>
										<div className='panel-heading'>
												<h5 className='panel-title'>{m.title} <LocalDate date={m.date} month='short'/>: {this.renderEvent(m)}</h5>
										</div>
										<div className='panel-body'>
												<div>{m.fcttext_metric}</div>
												<img src={m.icon_url}/>
										</div>
								</div>
						);
				});
		}

		renderDefault() {
				return (
						<div className='col-xs-12 col-md-12'>
								<div className='jumbotron' style={{margin: '0px'}}>
										<table className='table table-hover'>
												<thead>
														<tr>
																<th style={{width: '20%'}}>Datum</th>
																<th style={{width: '10%'}}>Tijdstip</th>
																<th style={{width: '30%'}}></th>
																<th style={{width: '30%'}}>
																		<a href='https://www.wunderground.com/' target='_blank'>
																				<img src='/blijdorp/images/wundergroundLogo_4c_rev_horz.png'
																									width='150'/>
																		</a>
																		<th style={{width: '10%'}}></th>
																</th>
														</tr>
												</thead>
												<tbody>
														{
																this.state && this.state.data && this.state.data.map(m => {
																		return (
																				<tr>
																						<td>{m.title} <LocalDate date={m.date} month='long'/></td>
																						<td><LocalTime date={m.date} /></td>
																						<td>{ this.renderEvent(m) }</td>
																						<td>{m.fcttext_metric}</td>
																						<td><img src={m.icon_url}/></td>	 
																				</tr>
																		);
																})
														}
						      </tbody>
								  </table>
								<Update />
								</div>
						</div>
				);
		}

		render() {
				return (
						<div>
								<MediaQuery query='(min-device-width: 768px)'>
										{ this.renderDefault() }
								</MediaQuery>
								<MediaQuery query='(max-device-width: 667px)'>
										{ this.renderCompact() }
								</MediaQuery>
						</div>
				);
		}
}
