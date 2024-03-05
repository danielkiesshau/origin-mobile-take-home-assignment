import React from 'react';
import {Control, Controller, FieldValues, Path} from 'react-hook-form';
import {Text, TextInput} from 'react-native';

interface Props<T extends FieldValues> {
  name: Path<T>;
  isRequired: boolean;
  isSensitiveData?: boolean;
  placeholder: string;
  error: string | undefined;
  control: Control<T>;
}
function Input<T extends FieldValues>({
  isRequired,
  isSensitiveData,
  control,
  placeholder,
  name,
  error,
}: Props<T>) {
  return (
    <Controller
      control={control}
      rules={{
        required: isRequired,
      }}
      render={({field: {onChange, value}}) => (
        <>
          <TextInput
            value={value}
            onChangeText={onChange}
            placeholder={placeholder}
            style={{
              height: 45,
              marginBottom: 8,
              paddingLeft: 8,
              backgroundColor: 'white',
            }}
            secureTextEntry={isSensitiveData}
          />
          {error && <Text>{error}</Text>}
        </>
      )}
      name={name}
    />
  );
}

export default Input;
