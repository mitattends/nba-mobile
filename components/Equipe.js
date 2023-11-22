import React from 'react';
import { Table, Row } from 'react-native-table-component';
import { StyleSheet, Text, View, FlatList} from 'react-native';

export default function Equipe() {
    const tableHead = ['Name', 'Email', 'Age'];
  const tableData = [
    {"classement": 1, "nom": "Boston Celtics", "victoire": 11, "defaite": 3, "vict": 78.6, "domicile": "5-0", "exterieur": "6-0", "derniers": "7-3", "points": 117.2, "pointsc": 106.6, "diff": 10.6},
    {"classement": 2, "nom": "Philadelphia 76ers", "victoire": 10, "defaite": 3, "vict": 76.9, "domicile": "6-2", "exterieur": "4-2", "derniers": "8-2", "points": 120.5, "pointsc": 115.5, "diff": 9},
  ];
  return (
    <View>
        <View>
            <Text style={styles.text}>Classements</Text>
        </View>
        <View style={styles.header}>
            <Text style={styles.heading}>CLASSEMENT</Text>
            <Text style={styles.heading}>NOM</Text>
            <Text style={styles.heading}>V</Text>
            <Text style={styles.heading}>D</Text>
            <Text style={styles.heading}>%VICT</Text>
            <Text style={styles.heading}>DOMICILE</Text>
            <Text style={styles.heading}>EXTERIEUR</Text>
            <Text style={styles.heading}>10 DERNIERS</Text>
            <Text style={styles.heading}>P/M</Text>
            <Text style={styles.heading}>PC/M</Text>
            <Text style={styles.heading}>DIFF</Text>
        </View>
      {tableData.map((item, index) => (
        <View key={index} style={styles.row}>
          <Text style={styles.rows}>{item.classement}</Text>
          <Text style={styles.rows}>{item.nom}</Text>
          <Text style={styles.rows}>{item.victoire}</Text>
          <Text style={styles.rows}>{item.defaite}</Text>
          <Text style={styles.rows}>{item.vict}</Text>
          <Text style={styles.rows}>{item.domicile}</Text>
          <Text style={styles.rows}>{item.exterieur}</Text>
          <Text style={styles.rows}>{item.derniers}</Text>
          <Text style={styles.rows}>{item.points}</Text>
          <Text style={styles.rows}>{item.pointsc}</Text>
          <Text style={styles.rows}>{item.diff}</Text>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
      textAlign: 'center',
      color: '#00253A'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#1ECBE1',
        padding: 15,
    },
    heading: {
        flex: 1,
        fontSize: 12,
        padding: 25,
        color: '#fff'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },
    rows: {
        flex: 1,
        fontSize: 12,
        padding: 25
    },
  });