import React from 'react';
import { useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Chart(props) {

    const {data} = props

    useEffect(() => {
    }, [data])

    return (
        <ResponsiveContainer width="100%" height={400}>
            <AreaChart
                width="100%"
                height={400}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Date" tickCount={8}/>
                <YAxis dataKey="Close" axisLine={false} tickFormatter={number => `$${number.toFixed(2)}`} domain={['dataMin', 'dataMax']}/>
                <Tooltip />
                <Area type="monotone" dataKey="Close" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        </ResponsiveContainer>
    );
}
