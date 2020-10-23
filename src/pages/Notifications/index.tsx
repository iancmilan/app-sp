import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';

import PageHeader from '../../components/PageHeader';
import NotificationItem from '../../components/NotificationItem';

import styles from './styles';

interface NotificationItems extends Array<{
    module: {
        module_id: string,
        module_name:string,
    },
    _id: string,
    createAt: Date,
    description: string,
    identifier: string,
    url: string,
}> {};

function Notifications() {
    const [ notifications, setNotifications ] = useState<NotificationItems>(
        [
            {
                module: {
                    module_id: "process",
                    module_name:"Processo"
                },
                _id:"5f7e331a69f6f54fa8c667df",
                createAt: new Date("2020-10-20T18:28:58.000Z"),
                description:"Teste",
                identifier:"5f7380d01ecf7014324e615e",
                url:"/process/5f7380d01ecf7014324e615e"
            },
            {
                module: {
                    module_id: "process",
                    module_name:"Processo"
                },
                _id:"5f7e331a6duef54fa8c667df",
                createAt: new Date("2020-10-07T18:28:58.000Z"),
                description:"Teste",
                identifier:"5f7380d01ecf7014324e615e",
                url:"/process/5f7380d01ecf7014324e615e"
            },
            {
                module: {
                    module_id: "process",
                    module_name:"Processo"
                },
                _id:"5f7e331a69f64hdfa8c667df",
                createAt: new Date("2020-10-03T18:28:58.000Z"),
                description:"Teste",
                identifier:"5f7380d01ecf7014324e615e",
                url:"/process/5f7380d01ecf7014324e615e"
            },
            {
                module:{
                    module_id:"process",
                    module_name:"Processo"
                },
                _id:"5f7e331969f6f54fa8c667dc",
                createAt: new Date("2020-10-07T18:28:57.000Z"),
                description:"Teste",
                identifier:"5f7380d01ecf7014324e615e",
                url:"/process/5f7380d01ecf7014324e615e"
            }
        ]
    );
    
    //Ordenando as notificações pela mais recente para a mais antiga.
    const sortedNotifications = notifications.sort((a,b)=>a.createAt.getTime()-b.createAt.getTime()).reverse();

    return (
        <View style={styles.container}>
            <PageHeader title="Notificações" />
            <ScrollView style={styles.notificationsWrapper}>
                {sortedNotifications.map(item => {
                    return <NotificationItem key={item._id} notification={item}/>
                })}
            </ScrollView>
        </View>
    );
}

export default Notifications;