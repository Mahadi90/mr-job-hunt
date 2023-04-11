import React from "react";
import Lottie from "lottie-react";
import banner from "../assets/banner.json";

const Blog = () => {
  return (
    <div>
      <div className="flex justify-around pt-12 pb-24 bg-gradient-to-r from-gray-300 to-gray-100">
        <Lottie className="w-40 h-14" animationData={banner} loop={true} />
        <h2 className="text-2xl font-bold text-center">Blogs</h2>
        <Lottie className="w-40 h-14" animationData={banner} loop={true} />
      </div>

      <div className="flex flex-col gap-6 bg-gray-100 p-4">
        <div className="bg-white p-4 rounded">
          <h3 className="font-bold text-md">
            1.When should you use context API?
          </h3>
          <p className="text-sm">
            Context Api helps us to reduce props drilling ,also context API can
            solve many problems that modern applications face, related to state
            management, for example, props drilling. Many solutions can solve
            state management issues and props drilling, but they may increase
            your build size and compromise your app performance. Context API is
            a React built-in feature, so we don’t have to worry about
            performance overhead and library installing issues.
            <br />
            The props drilling problem occurs when you pass a prop somewhere
            down the tree. When a project grows, data passing through props
            becomes chaotic, making the code more vulnerable and complex. To
            tackle this problem, we use Context API.
          </p>
        </div>
        <div className="bg-white p-4 rounded">
          <h3 className="font-bold text-md">2.What is a custom hook?</h3>
          <p className="text-sm">
            A custom hook is a special JavaScript function whose name starts
            with 'use' and can be used to call other hooks. Let's take a look at
            some major differences between a custom React JS hook and React JS
            components: A custom hook does not require a specific signature.
          </p>
        </div>
        <div className="bg-white p-4 rounded">
          <h3 className="font-bold text-md">3.What is useRef?</h3>
          <p className="text-sm">
            useRef is a built-in React hook that accepts one argument as the
            initial value and returns a reference . A reference is an object
            having a special property current
            <br />
            The useRef returns a mutable ref object. This object has a property
            called .current. The value is persisted in the refContainer.current
            property. These values are accessed from the current property of the
            returned object. The .current property could be initialised to the
            passed argument initialValue e.g. useRef(initialValue). The object
            can persist a value for a full lifetime of the component
          </p>
        </div>
        <div className="bg-white p-4 rounded">
          <h3 className="font-bold text-md">4.What is useMemo?</h3>
          <p className="text-sm">
            The useMemo is a hook used in the functional component of react that
            returns a memoized value. In Computer Science, memoization is a
            concept used in general when we don’t need to recompute the function
            with a given argument for the next time as it returns the cached
            result. A memoized function remembers the results of output for a
            given set of inputs. For example, if there is a function to add two
            numbers, and we give the parameter as 1 and 2 for the first time the
            function will add these two numbers and return 3, but if the same
            inputs come again then we will return the cached value i.e 3 and not
            compute with the add function again. In react also, we use this
            concept, whenever in the React component, the state and props do not
            change the component and the component does not re-render, it shows
            the same output.
            <br /> The useMemo hook is used to improve performance in our React
            application.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
