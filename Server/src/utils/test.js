//socket.io in the backend
socket.on(CONSTANTS.SOCKET.CONNECT_RABBIT_ADMIN, () => {
    console.log("CONNECT_RABBIT_ADMIN");
  });

  socket.on(CONSTANTS.SOCKET.CONNECT_RABBIT_CUSTOMER, (userId) => {
    console.log("CONNECT_RABBIT_CUSTOMER: userID: ", userId);
  });

  // Home client customer
  useEffect(() => {
    socketServices.initializeSocket();
    socketServices.emit(constants.SOCKET.CONNECT_RABBIT_CUSTOMER, userId);
    return () => {
      socketServices.socket.disconnect();
    };
  }, []);

  // home client admin 

  useEffect(() => {
    socketServices.initializeSocket();
    socketServices.emit(constants.SOCKET.CONNECT_RABBIT_ADMIN);
    socketServices.on(constants.SOCKET.CREATE_ORDER, orderData => {
      onDisplayNotification(orderData);
      dispatch(fetchUserById(userId));
      dispatch(fetchOrders());
      // dispatch(fetchGetQueueFromRabbitMQ())
    });
    return () => {
      socketServices.socket.disconnect();
    };
  }, [dispatch]);
