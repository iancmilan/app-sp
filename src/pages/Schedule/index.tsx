import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';

import PageHeader from '../../components/PageHeader';
import ScheduleItem from '../../components/ScheduleItem';
import Date from '../../components/Date';

import styles from './styles';

interface ScheduleItems {
  month: Array<{
    date: string;
    content: Array<{
      _id: string;
      hour: string;
      status: string;
      color: string;
      processNumber: string;
      expertName: string;
      expertiseDate: string;
      place: string;
    }>
  }>;
}

function Schedule() {
  const [schedule, setSchedule] = useState<ScheduleItems>(
    {
      month : [
        {
          date:"2020-01-01T03:00:00.000Z",
          content:[
            {
              _id:"5f7378933e2c9f63ee7c83dd",
              hour:"16:00",
              status:"Aguardando",
              color: "#fcb900",
              processNumber:"85598772452441",
              expertName: 'Ian',
              expertiseDate: '2020-01-01T03:00:00.000Z',
              place: 'Empresa',
            },
            {
              _id:"5f73789f3e2c9f63ee7c83e1",
              hour:"16:00",
              status:"Aguardando",
              color: "#fcb900",
              processNumber:"855987724541",
              expertName: 'Gustavo',
              expertiseDate: '2020-01-01T03:00:00.000Z',
              place: 'Comarca',
            }
          ]
        },
        {
          date:"2020-01-02T03:00:00.000Z",
          content:[
            {
                _id:"5f73787f3e2c9f63ee7c83d9",
                hour:"16:00",
                status:"Aguardando",
                color: "#fcb900",
                processNumber:"855987741",
                expertName: 'Ian',
                expertiseDate: '2020-01-02T03:00:00.000Z',
                place: 'Delegacia',
            }
          ]
        },
        {
          date:"2020-01-03T03:00:00.000Z",
          content:[],
        },
        {
          date:"2020-01-04T03:00:00.000Z",
          content:[],
        },
        {
          date:"2020-01-05T03:00:00.000Z",
          content:[],
        },
        {
          date:"2020-01-06T03:00:00.000Z",
          content:[
            {
              _id:"5f737874867g9f63ee7c83d9",
              hour:"19:00",
              status:"Aguardando",
              color: "#fcb900",
              processNumber:"855294841",
              expertName: 'Gustavo',
              expertiseDate: '2020-01-06T03:00:00.000Z',
              place: 'Unochapecó',
            }
          ],
        }
      ]
    }
  );

  console.log(schedule)

  return (
    <View style={styles.container}>
      <PageHeader title="Agenda" />
      <ScrollView style={styles.scheduleWrapper}>
        {schedule.month.map((item, index) => {
          if(item.content.length > 0){
            return (
              <View key={`${item.date}${index}`}>
                <Date date={item.date} />
                {item.content.map(content => <ScheduleItem key={content._id} content={content} />)}
              </View>
            );
          }
        })}
      </ScrollView>
    </View>
  );
}

export default Schedule;