---
title: "Kubectl Command Summary"
date: '2025-10-11'
spoiler: "kubectl run apache --image httpd"
---

When we work in a `k8s` environment, we usually create `YAML` files for actual development.
But sometimes, we need to practice `kubectl` commands to run a simple test server.

## Frequent Commands

```bash
# Create a pod
$ kubectl run <POD_NAME> --image <IMAGE_NAME>
# Show a list of resources
$ kubectl get <object>
# Show a list of s in detail
$ kubectl get <object> -o wide
# Show detailed information about the selected information
$ kubectl describe <object> nginx
# Delete the specified resource
$ kubectl delete <object> <NAME>
# Delete all the specified resources
$ kubectl delete <object> --all
# Delete all resources
$ kubectl delete --all
# Show the log history of the selected pod.
$ kubectl logs pods/<POD_NAME>
# Show the log history of the selected pod in real time.
$ kubectl logs pods/<POD_NAME> -f
# Port-forwarding pod
$ kubectl port-forward pods/<POD_NAME> <LOCAL_PORT>:<POD_PORT>
# Access the selected pod
$ kubectl exec -it pods/<POD_NAME> -- bash
$ kubectl exec -it pods/<POD_NAME> -- sh
# Create and Update a manifest file
$ kubectl apply -f <FILE_NAME>
```

## Wrap Up

I organized these commands on my blog as a reference to avoid forgetting them.