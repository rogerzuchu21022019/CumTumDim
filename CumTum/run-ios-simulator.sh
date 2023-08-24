#!/bin/bash

# Set the simulator UDID for the specific device you want to target
SIMULATOR_UDID="13C5A8E5-82E1-4603-BEF6-656A8F4BEB3F" # Replace this with the UDID of your desired simulator

# Boot the simulator with the specified UDID
xcrun simctl boot "$SIMULATOR_UDID"

# Run the React Native app on the specified simulator
yarn ios --simulator "$SIMULATOR_UDID"
