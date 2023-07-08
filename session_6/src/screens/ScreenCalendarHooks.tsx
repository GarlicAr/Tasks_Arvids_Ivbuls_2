import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import moment from 'moment';

export function ScreenCalendarHooks() {
  const [currentDate, setCurrentDate] = useState(moment());

  const renderCalendar = () => {
    const startOfMonth = moment(currentDate).startOf('month');
    const endOfMonth = moment(currentDate).endOf('month');

    const calendar = [];
    let date = moment(startOfMonth).startOf('week');

    while (date.isSameOrBefore(endOfMonth, 'day')) {
      const week = [];
      for (let i = 0; i < 7; i++) {
        week.push(
          <TouchableOpacity
            key={date.format('YYYY-MM-DD')}
            onPress={() => handleDatePress(date)}
            style={styles.dateButton}>
            <Text style={styles.dateText}>{date.date()}</Text>
          </TouchableOpacity>
        );
        date = moment(date).add(1, 'day');
      }
      calendar.push(
        <View key={date.format('YYYY-MM-DD')} style={styles.weekContainer}>
          {week}
        </View>
      );
    }
    return calendar;
  };

  const handleDatePress = (date: moment.Moment) => {
    console.log('Selected date:', date.format('YYYY-MM-DD'));

  };

  const handlePrevMonth = () => {
    setCurrentDate(moment(currentDate).subtract(1, 'month'));
  };

  const handleNextMonth = () => {
    setCurrentDate(moment(currentDate).add(1, 'month'));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handlePrevMonth}>
          <Text style={styles.headerButton}>{'< Prev'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>{currentDate.format('MMMM YYYY')}</Text>

        <TouchableOpacity onPress={handleNextMonth}>
          <Text style={styles.headerButton}>{'Next >'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.calendar}>{renderCalendar()}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerButton: {
    fontSize: 16,
    color: '#007AFF',
  },
  calendar: {
    flex: 1,
    paddingHorizontal: 16,
  },
  weekContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  dateButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  dateText: {
    fontSize: 16,
  },
});
