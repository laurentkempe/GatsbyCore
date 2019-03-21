import React, { Component } from 'react';

export class Weather extends Component {
    displayName = Weather.name

    constructor(props) {
        super(props);
        this.state = { data: {}, loading: true };
    }

    async componentDidMount() {
        const response = await fetch('api/SampleData/WeatherForecasts');
        const json = await response.json();

        this.setState({ data: json, loading: false });
    }

    static renderUpcomingWeekTable(weatherForecasts) {
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Temperature</th>
                        <th>Summary</th>
                    </tr>
                </thead>
                <tbody>
                    {weatherForecasts.map(forecast =>
                        <tr>
                            <td>{forecast.dateFormatted}</td>
                            <td>{forecast.temperatureC}</td>
                            <td>{forecast.summary}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Weather.renderUpcomingWeekTable(this.state.data)

        return (
            <div>
                <h1>Weather</h1>
                {contents}
            </div>
        );
    }
}