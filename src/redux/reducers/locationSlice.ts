import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {useState} from 'react';

export interface locationType {
  selectedAddress: string;
}

const initialState: locationType = {
  selectedAddress: '',
};

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setDeliveryLocation: (state, action: PayloadAction<locationType>) => {
      state.selectedAddress = action.payload.selectedAddress;
    },
  },
});
