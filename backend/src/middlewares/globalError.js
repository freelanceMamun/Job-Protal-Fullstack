const GlobalErrorHandler = (error, _req, res) => {
  return res.status(error.status || 500).json({
    error: {
      message: error.message || 'Internal Server Error',
    },
  });
};

export default GlobalErrorHandler;
