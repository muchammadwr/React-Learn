const AuthLayouts = (props) => {
  const { children, title } = props;
  return (
    <div className="w-full max-w-xs">
      <h1 className="text-3xl text-blue-600 font-bold mb-2">{title}</h1>
      <p className="font-medium text-slate-500 mb-8">
        Welcome, Please enter your details
      </p>
      {children}
    </div>
  );
};

export default AuthLayouts;