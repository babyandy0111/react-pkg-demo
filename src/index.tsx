import * as React from 'react'
import { useEffect, useRef } from 'react';

interface DemoLabelProps {
  children: string;
}

const DemoLabel = (props: DemoLabelProps) => {
  const { children = '' } = props;
  const ref = useRef<any>(null);

  useEffect(() => {

  }, [children]);

  return (
    <div> 123 test </div>
  )
}

export default DemoLabel;
