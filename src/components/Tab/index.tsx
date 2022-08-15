import TouchButton from '@components/TouchButton';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import {
  Animated,
  Text,
  LayoutChangeEvent,
  View,
  ViewStyle,
  TextStyle,
} from 'react-native';

type TabItem = {
  tab: string | React.ReactNode;
  key: string;
};

interface TabProps {
  color?: string;
  tabList: TabItem[];
  value?: string;
  boxStyle?: ViewStyle;
  textStyle?: TextStyle;
  onChange?: (key: string) => void;
}

const Tab: React.FC<TabProps> = props => {
  const {
    onChange,
    value,
    color = '#E77075',
    textStyle = {},
    boxStyle = {},
    tabList = [],
  } = props;
  const [activeKey, setActiveKey] = useState<string>();
  const [showbar, setShowBar] = useState<boolean>(true);
  const [itemWidth, setItemWidth] = useState<number>(0);
  const widthGrow = useRef(new Animated.Value(0)).current;

  /** onChange active tab */
  const changeActiveTab = (key: string, idx?: number) => {
    setActiveKey(key);
    onChange?.(key);
    setShowBar(idx != undefined);
    if (typeof idx === 'number') {
      Animated.timing(widthGrow, {
        toValue: idx * itemWidth,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  /** query element width for Animated */
  const queryItemWidth = (e: LayoutChangeEvent) => {
    const width = e.nativeEvent.layout.width || 0;
    let itemWidth: number = 0;
    if (tabList.length) {
      itemWidth = width / tabList.length;
    }
    setItemWidth(itemWidth);
  };

  /** initial local state */
  useEffect(() => {
    if (tabList.length) {
      let actKey: string;
      let actIndex: number | undefined;
      if (value) {
        actKey = value;
        actIndex = tabList.findIndex(v => v.key === value);
        actIndex = actIndex == -1 ? undefined : actIndex;
      } else {
        actKey = tabList[0].key;
        actIndex = 0;
      }
      changeActiveTab(actKey, actIndex);
    }
  }, []);

  /** synchronization `props.value ` and activeKey */
  useEffect(() => {
    if (value && activeKey !== value) {
      let actIndex: number | undefined = tabList.findIndex(
        v => v.key === value,
      );
      actIndex = actIndex === -1 ? undefined : actIndex;
      changeActiveTab(value, actIndex);
    }
  }, [value, JSON.stringify(tabList), activeKey]);

  return (
    <View
      style={{
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'stretch',
        position: 'relative',
        ...boxStyle,
      }}
      onLayout={queryItemWidth}>
      {tabList.map((v, index: number) => {
        return (
          <View style={{flex: 1}} key={v.key}>
            <TouchButton
              onPress={() => changeActiveTab(v.key, index)}
              textStyle={{
                ...textStyle,

                color: activeKey === v.key ? color : textStyle.color || '#666',
              }}
              boxStyle={{
                backgroundColor: '#fff',
                width: '100%',
                height: '100%',
                borderRadius: 0,
              }}>
              {v.tab}
            </TouchButton>
          </View>
        );
      })}
      {tabList.length > 0 && showbar && (
        <View
          style={{
            position: 'absolute',
            left: 0,
            bottom: 0,
            width: '100%',
            flexDirection: 'row',
          }}>
          <Animated.View style={{width: widthGrow}} />
          <View
            style={{
              paddingHorizontal: 8,
              width: Math.floor(100 / tabList.length) + '%',
            }}>
            <View style={{height: 3, backgroundColor: color}} />
          </View>
        </View>
      )}
    </View>
  );
};

export default Tab;
