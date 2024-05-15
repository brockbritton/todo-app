
import { Grid } from '@mantine/core';

export default function Login() {
  return (
    <Grid id="my-grid" style={{ position: 'absolute', right: '0', width: '50vw' }}>
      <Grid.Col span={4}>
        <label>
          <input placeholder='Username' />
        </label>
      </Grid.Col>
      <Grid.Col span={4}>
        <label>
          <input placeholder='Password' />
        </label>
      </Grid.Col>
      <Grid.Col span={4}>
        <button>Log In</button>
      </Grid.Col>
    </Grid>
  );
}